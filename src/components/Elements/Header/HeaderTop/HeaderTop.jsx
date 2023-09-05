import classes from './HeaderTop.module.css';

import { MEDIA, SET, MENU } from '../../../../data/data';
import Select from 'react-select';

const HeaderTop = () => {
    return (
        <div className={classes.frame}>
            <div className="container">
                <div className={classes.flex}>
                    <div className={classes.row}>
                        {SET &&
                            SET.length &&
                            SET.map((data, index) => (
                                <div key={index} className={classes.select}>
                                    <img
                                        src={data.img.src}
                                        alt={data.img.alt}
                                    />
                                    {/* <select
                                        key={index}
                                        className={`${classes.button} ${classes.button__left}`}
                                    >
                                        <option defaultValue>
                                            {data.label}
                                        </option>
                                        {data.options &&
                                            data.options.length &&
                                            data.options.map(
                                                (option, index) => (
                                                    <option
                                                        key={index}
                                                        value={option.value}
                                                    >
                                                        {option.label}
                                                    </option>
                                                )
                                            )}
                                    </select> */}
                                    <Select
                                        options={data.options}
                                        placeholder={data.label}
                                        classNames={{
                                            container: () =>
                                                'my-select__container',
                                            control: () =>
                                                'my-select__controll',
                                            valueContainer: () =>
                                                'my-select__value-container',
                                            
                                            }}
                                    />
                                </div>
                            ))}
                    </div>
                    <div className={classes.row}>
                        <div className={classes.link}>
                            {MEDIA &&
                                MEDIA.length &&
                                MEDIA.map((data, index) => (
                                    <a key={index} href={data.link}>
                                        <img
                                            className={classes.img}
                                            src={data.img.src}
                                            alt={data.img.alt}
                                        />
                                    </a>
                                ))}
                        </div>
                        <div className={classes.row}>
                            {MENU &&
                                MENU.length &&
                                MENU.map((data, index) => (
                                    <button
                                        key={index}
                                        className={`${classes.button} ${classes.button__right}`}
                                    >
                                        <img
                                            src={data.img.src}
                                            alt={data.img.alt}
                                        />
                                        <div>{data.text}</div>
                                    </button>
                                ))}
                            <div
                                className={`${classes.button} ${classes.button__right}`}
                            >
                                FAQ
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;
