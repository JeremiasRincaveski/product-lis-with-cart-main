import { useContext } from "react";
import ItemsContext from "../context/ItemsContext";

const useItems = () => {
  const { items, setItems } = useContext(ItemsContext);

  const adicionaItem = (item) => {
    // Valida se tem o item cadastrado, se tiver ele soma senão ele adiciona
    const isItemCadastrado = items.some(prevItem => prevItem.nome === item.name);
    
    if (isItemCadastrado) {
      adicionaQnt(item.name);
    } else {
      const { name: nome, image: { thumbnail: imagem}, price: preco} = item;
      const novoItem = {
        nome,
        imagem,
        preco,
        qnt: 1
      };

      setItems([ ...items, novoItem ]);
    }
  };

  const removerItem = (nome) => {
    setItems(prevItems => prevItems.filter(prevItem => prevItem.nome !== nome));
  };

  const validaQnt = () => {
    setItems(prevItems => prevItems.filter(item => item.qnt > 0));
  };

  const adicionaQnt = nome => {
    setItems(novoItem => 
      novoItem.map(item => 
        item.nome === nome ? { ...item, qnt: item.qnt + 1 } : item
      )
    );
  };

  const removerQnt = nome => {
    setItems(novoItem => {
      novoItem.map(item =>
        item.nome === nome ? { ...item, qnt: item.qnt - 1 } : item
      );
    });
    validaQnt();
  };

  return { items, adicionaItem, removerItem, removerQnt };
};

export default useItems;