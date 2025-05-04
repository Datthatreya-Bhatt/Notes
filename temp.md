User Schema
id
Name 
role - user = 10, admin = 20, super admin = 30
email




group schema [user to group - one to many relation ]
id
userId
groupName
adminId


wallet [user to wallet is one to one relation ]
id
userId
balance




function sendMoney(session, targetId, amount) {
    const senderId = session.userId;
    const senderRole = session.role;

    beginTransaction();

    try {
        const senderWallet = getWallet(senderId);
        if (!senderWallet || senderWallet.balance < amount) {
            throw Error("Insufficient balance");
        }

        if (senderRole === 30) {
            // Super admin assumed to be sending to a group
            const group = getGroupById(targetId);
            if (!group) throw Error("Group not found");

            const members = getUsersInGroup(group.id);
            const totalAmount = amount * members.length;

            if (senderWallet.balance < totalAmount) {
                throw Error("Insufficient balance for group transfer");
            }

            updateWalletBalance(senderId, -totalAmount); // Deduct from super admin

            for (let member of members) {
                updateWalletBalance(member.id, amount);
            }

        } else {
            // Normal or admin user sending to another user
            if (senderId === targetId) {
                throw Error("Cannot send money to self");
            }

            const receiverWallet = getWallet(targetId);
            if (!receiverWallet) throw Error("Receiver wallet not found");

            updateWalletBalance(senderId, -amount);
            updateWalletBalance(targetId, amount);
        }

        commitTransaction();
        return { status: 200, message: "Transaction successful" };

    } catch (error) {
        rollbackTransaction();
        return { status: 400, message: error.message };
    }
}







function assignAdmin(session, userIdToPromote) {
    if (session.role !== 30) {
        return { status: 403, message: "Only super admins can assign admins" };
    }

    const user = getUserById(userIdToPromote);
    if (!user) {
        return { status: 404, message: "User not found" };
    }

    updateUserRole(userIdToPromote, 20); // Assign admin role
    return { status: 200, message: "User promoted to admin" };
}


//Thought process
//1. session will have the sender role and id
//2. if the role is super admin then we will consider id as group id from the group table otherwise userId from the group table
//3. when super admin sends money then we will first check if his wallet has enough money to send to user of the group if he has then all the user of that group will be credited with same amount in their wallet and super admin wallet will be debited
//4. When normal user sends money first we check if he has money, if he has then other single user will get his wallet credited with the amount and sender will get his wallet debited 

//Things to consider
//1. Handle all the error with proper response to client with status code
//2. We should use transactions when we are working with multiple tables
//3. We have to ensure that user can not deduct more amount than he has in his wallet and also wallet should not go below 0.
//4. User can not send money to his own account









