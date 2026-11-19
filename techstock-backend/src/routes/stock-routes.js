import { v4 } from 'uuid'
import { listAllItens, listItemById, createItem, deleteItem, patchItemStatus } from "../controller/stock-controller.js"

export async function stockRoutes(app)  {
    app.get("/", listAllItens)

    app.get("/:id", listItemById)

    app.post("/", createItem)

    app.delete("/:id", deleteItem)

    app.patch("/status/:id", patchItemStatus)
}