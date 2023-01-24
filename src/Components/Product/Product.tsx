import * as React from "react";
import "./Product.scss";
import Disabled from "../Disabled/Disabled";
import {useState} from "react";



export type PropsType = {
    id: number,
    description: string,
    species: string,
    mouse: string,
    text: string,
    count: string,
    isActive: boolean
}

function Product(props: PropsType) {
    const [isSelected, setIsSelected] = useState(false);

    const onClickProduct = () => {
        setIsSelected(!isSelected);
    }

    return (
        <>
            { props.isActive
                ?
                <div className="product">
                    <div onClick={onClickProduct} className={isSelected ? "card__active" : "card"}>
                        <div className="card__bg">
                            <div className="card__inner">
                                <div className="card__label">Сказочное заморское яство</div>
                                <div className="card__title">Нямушка</div>
                                <div className="card__descr">{props.description}</div>
                                <div className="card__specs">
                                    <b>{props.species}</b> порций
                                    <br/>
                                    <b>{props.mouse}</b> <span>{props.text}</span>
                                </div>
                                <div className={isSelected ? "weight__active" : "weight"}>
                                    <div className="weight__count">{props.count}</div>
                                    <div className="weight__measure">кг</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <Disabled description={props.description}
                species={props.species}
                mouse={props.mouse}
                text={props.text}
                count={props.count}
                />
            }
        </>
    );
}

export default Product;