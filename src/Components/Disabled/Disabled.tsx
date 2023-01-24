import * as React from "react";
import "../Product/Product.scss";

type PropsType = {
    description: string,
    species: string,
    mouse: string,
    text: string,
    count: string
}

const Disabled: React.FC<PropsType> = ({ description,
                                           species,
                                           mouse,
                                           text,
                                           count }) => {

    return (
        <div className="product">
            <div className="card__disabled">
                <div className="card__bg">
                    <div className="card__inner__disabled">
                        <div className="card__label">Сказочное заморское яство</div>
                        <div className="card__title">Нямушка</div>
                        <div className="card__descr">{description}</div>
                        <div className="card__specs">
                            <b>{species}</b> порций
                            <br/>
                            <b>{mouse}</b> <span>{text}</span>
                        </div>
                        <div className="weight__disabled">
                            <div className="weight__count">{count}</div>
                            <div className="weight__measure">кг</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Disabled;