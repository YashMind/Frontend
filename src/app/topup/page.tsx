import Gateways from "@/components/Payment/gateways";

const Page = async ({ searchParams }: { params: Promise<{ plan_id: string }>, searchParams: { [key: string]: string } }) => {
    const credit = searchParams?.credit;
    return <Gateways credit={credit} />
};

export default Page;
