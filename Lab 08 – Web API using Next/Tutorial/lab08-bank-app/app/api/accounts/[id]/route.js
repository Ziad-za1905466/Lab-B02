import AccountsRepo from "../accounts-repo";

const repo = new AccountsRepo();

export async function GET(request, { params }) {
    const { id } = params;
    const account = await repo.getAccount(id)
    return Response.json(account, { status: 200 });
}

export async function POST(request) {
    const account = await request.json();
    const newAccount = await repo.addAccount(account)
    return Response.json(newAccount)

}
export async function PUT(request) {
    const account = await request.json();
    const newAccount = await repo.updateAccount(account)
    return Response.json(newAccount)
    
}