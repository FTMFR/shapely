import Header from "./components/header/Header";
import EffectPart from "./components/effectPart/EffectPart";
import Content from "./components/content/Content";
import ReverseContent from "./components/reverseContent/ReverseContent";
import Options from "./components/options/Options";
import LastProject from "./components/lastProject/LastProject";
import Clients from "./components/clients/Clients";
import Like from "./components/like/Like";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <EffectPart />
      <Content />
      <ReverseContent />
      <EffectPart />
      <Options />
      <LastProject />
      <EffectPart />
      <Clients />
      <Like />
    </>
  );
}

export default App;
