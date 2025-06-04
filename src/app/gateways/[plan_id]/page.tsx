import Gateways from "@/components/Payment/gateways";

const Page = async ({ params }: { params: Promise<{ plan_id: string }> }) => {
    const { plan_id } = await params;
    return <Gateways plan_id={plan_id} />
};

export default Page;
