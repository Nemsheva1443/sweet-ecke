
import { bilderCake } from "./settings/bilder.js";

export function Cake({ name }) {
  return <img src={bilderCake[name]} alt="Wunschtorte" />;
}