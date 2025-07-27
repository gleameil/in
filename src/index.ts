import { comeHome } from "./places/home/home";
import { startTime } from "./shared/time/time";

window.onload = () => {
  startTime();
  comeHome();
}