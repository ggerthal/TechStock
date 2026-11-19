import { getAllItens, getItemById, postItem, deleteItemService, patchItemStatusService } from "../services/stock-services.js"

export async function listAllItens(req, res) {
    const itens = await getAllItens(req.query.page)

    return res.code(200).send(itens)
}

export async function listItemById(req, res) {

    const item = await getItemById(req.params.id)

    if(!item) {
        res.code(404).send({ message: "Not Found"})
    }

    res.code(200).send(item)
}

export async function createItem(req, res) {
    
    const newItem = await postItem(req.body)

    res.code(201).send(newItem)
}

export async function deleteItem(req, res) {

    const message = await deleteItemService(req.params.id)

    res.code(202).send({ message })

}

export async function patchItemStatus(req, res) {

    const item = await patchItemStatusService(req.params.id, req.body)

    res.code(200).send(item)
    
}