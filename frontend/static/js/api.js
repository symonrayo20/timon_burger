
window.addEventListener("DOMContentLoaded", () => {
    const createBtn = document.querySelector("#createProduct");
    const updateBtn = document.querySelector("#updateProduct");
    const deleteBtn = document.querySelector("#deleteProduct");

    createBtn.addEventListener("click", async () => {
        const cName = document.querySelector("#cName").value;
        const cPrice = document.querySelector("#cPrice").value;

        const { data } = await axios({
            method: "post",
            url: "/products",
            data: {
                name: cName,
                price: cPrice
            },
        });
        window.location.reload();
        // console.log(("Create results: ", data));
    })
    updateBtn.addEventListener("click", async () => {
        const uId = document.querySelector("#uId").value;
        const uName = document.querySelector("#uName").value;
        const uPrice = document.querySelector("#uPrice").value;

        const { data } = await axios({
            method: "put",
            url: "/products",
            data: {
                id: uId,
                name: uName,
                price: uPrice
            },
        });
        window.location.reload();
        // console.log("Update results: ", data);
    })
    deleteBtn.addEventListener("click", async () => {
        const dId = document.querySelector("#dId").value;

        const { data } = await axios({
            method: "delete",
            url: "/admin",
            data: {
                id: dId
            }
        })
        window.location.reload();
        // console.log("Delete Results: ", data);
    })
})