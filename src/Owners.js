function Owners(props) {
  return (
    <>
      <h2>Owners</h2>
      <ul>
        {/* Each owner should link to /owners/:id */}
        {props.owners.map((owner) =>
          <li key={owner.id}>
            {owner.name}
          </li>
        )}
      </ul>
    </>
  )
}

export default Owners