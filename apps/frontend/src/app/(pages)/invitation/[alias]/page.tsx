export default function InvitationPage(props: any) {
  return (
    <div>
      <h1>Invitation Page</h1>
      <p>{props.params.alias}</p>
    </div>
  );
}
