import { faArrowRightLong, faStar, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { ProductItemModules } from '~/CssModules';
import { useState } from 'react';
import ProductPreview from '../ProductPreview';

const cx = ProductItemModules();

function ProductItem({ active }) {
    const [productPreviewVisible, setProductPreviewVisible] = useState(false);

    function handleProductPreview(vision) {
        setProductPreviewVisible(vision);
    }

    return (
        <div className={cx('wrapper')}>
            <Link className={cx('prd-thumb')}>
                <div className={cx('prd-lable')}>
                    <div className={cx('featured')}>Hot</div>
                    <div className={cx('onsale')}>-13%</div>
                </div>
                <img
                    className={cx('prd-image')}
                    src="https://wpbingosite.com/wordpress/cerla/wp-content/webp-express/webp-images/uploads/2018/05/BLUEBERRY-LUDICROUS-LIP-1020x1020.jpg.webp"
                />
                <div className={cx('prd-buttons')}>
                    <Link to="/productdetail" className={cx('item')}>
                        <FontAwesomeIcon className={cx('icon', { 'prd-detail': true })} icon={faArrowRightLong} />
                    </Link>
                    <div className={cx('item', { 'wishlist': true, 'active': active })}>
                        <FontAwesomeIcon className={cx('icon')} icon={faHeart} />
                    </div>
                    <div onClick={() => handleProductPreview(true)} className={cx('item', { 'search': true })}>
                        <FontAwesomeIcon className={cx('icon')} icon={faMagnifyingGlass} />
                    </div>
                    <ProductPreview visible={productPreviewVisible} handleVisible={handleProductPreview} />
                </div>
            </Link>

            <div className={cx('prd-content')}>
                <div className={cx('content-top')}>
                    <Link className={cx('prd-cate')}>bath & body</Link>
                    <div className={cx('rating')}>
                        <div className={cx('star-rating')}>
                            <FontAwesomeIcon className={cx('icon', { checked: true })} icon={faStar} />
                            <FontAwesomeIcon className={cx('icon', { checked: true })} icon={faStar} />
                            <FontAwesomeIcon className={cx('icon', { checked: true })} icon={faStar} />
                            <FontAwesomeIcon className={cx('icon')} icon={faStar} />
                            <FontAwesomeIcon className={cx('icon')} icon={faStar} />
                        </div>
                        <span className={cx('review-count')}>(1)</span>
                    </div>
                </div>

                <h3 className={cx('prd-title')}>
                    <Link to="/productdetail">blueberry ludicrous lip</Link>
                </h3>

                <div className={cx('prd-price')}>
                    <del className={cx('cost')}>$400</del>
                    <span className={cx('saleoff')}>$299</span>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
