import AcceptInviteClient from "@/app/accept-invite/[token]/AcceptInviteClient";

export default function Page({ params }: { params: { token: string } }) {
  return <AcceptInviteClient token={params.token} />;
}
