

const ModalZoom = ({ foto }) => {
  return (
    <>
        <dialog open={!!foto}>
            <p>Teste Modal</p>
            <form action="dialog">
                <button>Ok</button>
            </form>
        </dialog>
    </>
  )
}

export default ModalZoom