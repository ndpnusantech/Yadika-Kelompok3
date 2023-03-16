import "./style/mainFasilitas.css"

const MainFasilitas = () => {
    return(
        <div className="container-faci">
            <div className="split-faci">
            <div className="faci">
                <img src=".\images\spa.jpg" width={450} />
                </div>
                <div className="faci2">
                    <div className="in-faci1">
                    <h1>Spa</h1>
                    </div>
                    <div className="in-faci2">
                        <div className="img-faci2">
                    <img src=".\images\spa.jpg" width={170} height={100} />  
                    <img src=".\images\spa.jpg" width={170} height={100} />  
                    <img src=".\images\spa.jpg" width={170} height={100} />  
                    </div>
                    <h4>Spa merupakan salah satu bentuk perawatan tubuh yang terdiri dari berbagai jenis dan tahap perawatan. Tak hanya untuk kecantikan, spa juga dapat membantu relaksasi tubuh sehingga kebugaran tubuh meningkat.</h4>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default MainFasilitas