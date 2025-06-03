import Button from "./components/Buttons/Button";

let items = ["newYork", "america", "london", "paris", "tokyo"];
const handleSelectedItem = (item: string) => {
  console.log(item);
};

function App() {
  return (
    <>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectedItem={handleSelectedItem}
      /> */}
      <Button
        children="My button"
        onClick={() => {
          console.log("clicked");
        }}
      />
    </>
  );
}

export default App;
