import AccountsRepo from "../accounts-repo";

const repo = new AccountsRepo();

export async function GET(request, { params }) {
    const { id } = params;
    const account = await repo.getAccount(id)
    return Response.json(account, { status: 200 });
}

<<<<<<< HEAD
export async function POST(request) {
    const account = await request.json();
    const newAccount = await repo.addAccount(account)
    return Response.json(newAccount)

}
export async function PUT(request) {
    const account = await request.json();
    const newAccount = await repo.updateAccount(account)
    return Response.json(newAccount)
    
=======
export async function PUT(request) {
    const account = await request.json()
    const updatedAccount = await repo.updateAccount(account)
    return Response.json(updatedAccount)
}
export async function DELETE(request, { params }) {
    const { id } = params;
    const account = await repo.deleteAccount(id)
    return Response.json(account, { status: 200 });
>>>>>>> 58bb9e72bfcc4107d28c34dc7178977918ef8dae
}