// import Gateways from "@/components/Payment/gateways";

// const Page = async ({ params, searchParams }: { params: Promise<{ plan_id: string }>, searchParams: { [key: string]: string } }) => {
//     const { plan_id } = await params;
//     const credit = searchParams?.credit;
//     return <Gateways credit={credit} />
// };

// export default Page;
import Gateways from "@/components/Payment/gateways";

const Page = async (props: {
  params: Promise<{ plan_id: string }>;
  searchParams: Promise<{ [key: string]: string }>;
}) => {
  const { plan_id } = await props.params;
  const { credit } = await props.searchParams;

  return <Gateways credit={credit} />;
};

export default Page;
