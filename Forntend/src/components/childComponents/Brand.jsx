

export function Brand(props) {
    // console.log(pro)
    return (

        <div className="subBrands">
            <img src={`../Images/brandsCards/${props.name}.webp`} alt="F" />
            <p>{props.name}</p>
        </div>

    );
}

export default Brand;