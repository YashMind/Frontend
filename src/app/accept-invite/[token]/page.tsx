// import AcceptInviteClient from "@/app/accept-invite/[token]/AcceptInviteClient";

// export default async function Page({ params }: { params: { token: string } }) {
//   const { token } = await params
//   return <AcceptInviteClient token={token} />;
// }

import AcceptInviteClient from "@/app/accept-invite/[token]/AcceptInviteClient";
import { use } from "react";

export default function Page({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = use(params);
  return <AcceptInviteClient token={token} />;
}
