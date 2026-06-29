export default function InvestorPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div>
      <h1>Investor: {params.slug}</h1>
    </div>
  );
}