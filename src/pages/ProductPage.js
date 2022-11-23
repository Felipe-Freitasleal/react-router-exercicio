import { useParams } from "react-router-dom";
import Header from "../components/Header";

function ProductPage() {

    const params = useParams()
    console.log(params)

  return (
    <section>
      <h1>Produto id: {params.id}</h1>
      <hr />
      <Header/>
    </section>
  );
}

export default ProductPage;