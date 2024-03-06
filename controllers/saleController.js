import saleService from "../service/saleService.js"


const allSaleOfUser = async(req,res)=>{
    const {id} = req.params
    const {
        errorMessage,
        statusCode,
        value
    } = await saleService.allSaleOfUser(id)

    const sales = errorMessage ? {errorMessage : errorMessage} : value

    return res.status(statusCode).json(sales)
}

const saleController = {allSaleOfUser}

export default saleController