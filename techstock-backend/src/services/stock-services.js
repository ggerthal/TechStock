import { v4 } from "uuid"
import { db } from "../database/connection.js"

export async function getAllItens(page) {

    const offset = Number(page);

    const [ itens ] = await db.query("SELECT * FROM estoque LIMIT 10 OFFSET ?", [offset])

    return itens
}

export async function getItemById(id) {
    const [ item ] = await db.query("SELECT * FROM estoque WHERE id = ?", [id])

    return item
}

export async function postItem(body) {
    const { nome, categoria, numero_de_serie, estatus, data } = body
    
    const item = await db.query("INSERT INTO estoque (id, nome, categoria, numero_de_serie, estatus, data) VALUES (?, ?, ?, ?, ?, ?)", [ v4(),  nome, categoria, numero_de_serie, estatus, data ])

    return item
}

export async function deleteItemService(id) {
    const [ item ] = await db.query("DELETE FROM estoque WHERE id = ?", [id])

    return "Item deleted"
}

export async function patchItemStatusService(id, body) {
    const { estatus } = body

    const [ item ] = await db.query("UPDATE estoque SET estatus = ? WHERE id = ?", [estatus, id])

    return item
}