import OrderOptions from "./OrderOptions";
import { ENDPOINTS } from "../../constants/api";

const CreateOrder = () => (
  <>
    <OrderOptions optionsType={ENDPOINTS.scoops} />
    <OrderOptions optionsType={ENDPOINTS.toppings} />
    <div>Grand total</div>
    <div>Submit</div>
  </>
);

export default CreateOrder;
