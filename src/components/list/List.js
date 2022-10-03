function List() {
  const arr = ["Saad", "Usman"];
  let friends = arr.map((friend, index) => <li key={index}>{friend}</li>);
  return (
    <>
      <h3>Friends</h3>
      {friends}
    </>
  );
}

export default List;
