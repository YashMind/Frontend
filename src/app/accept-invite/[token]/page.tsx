import AcceptInviteClient from "@/app/accept-invite/[token]/AcceptInviteClient";

export default async function Page({ params }: { params: { token: string } }) {
  const { token } = await params
  return <AcceptInviteClient token={token} />;
}
