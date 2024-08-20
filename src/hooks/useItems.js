import { useContext } from "react";
import ItemsContext from "../context/ItemsContext";

const useItems = () => {
  const { items, setItems } = useContext(ItemsContext);

  const adicionaItem = (item) => {
    // Valida se tem o item cadastrado, se tiver ele soma senão ele adiciona
    const isItemCadastrado = items?.some(prevItem => prevItem.nome === item.name) ? true : false;
    
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
      if (items.length > 0) {
        setItems([ ...items, novoItem ]);
      } else {
        setItems([novoItem])
      }
    }
  };

  const removerItem = (nome) => {
    setItems(prevItems => prevItems.filter(prevItem => prevItem.nome !== nome));
  };

  const validaQnt = () => {
    setItems(prevItems => {
      if (!prevItems) return []
      return prevItems.filter(item => item.qnt > 0)
    });
  };

  const adicionaQnt = nome => {
    setItems(novoItem => 
      novoItem.map(item => 
        item.nome === nome ? { ...item, qnt: item.qnt + 1 } : item
      )
    );
  };

  const removerQnt = nome => {
    setItems(novoItem =>
      novoItem.map(item =>
        item.nome === nome ? { ...item, qnt: item.qnt - 1 } : item
      )
    );
    validaQnt();
  };

  const newOrder = () => {
    setItems([])
  };

  return { items, adicionaItem, removerItem, removerQnt, newOrder };
};

export default useItems;