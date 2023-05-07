import OrderOptions from "./OrderOptions";

const CreateOrder = () => (
  <>
    <OrderOptions optionsType="scoops" />
    <OrderOptions optionsType="toppings" />
    <div>Grand total</div>
    <div>Submit</div>
  </>
);

export default CreateOrder;
