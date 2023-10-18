import React from 'react';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
const CardComponent = () => {
    return (
        <Card
            hoverable
            className='shadow-xl w-full'
            cover={<img alt="example" src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/d7ea38182138769.Y3JvcCwxMjAwLDkzOCwwLDg.jpg" />}
        >
            <h3 className="font-semibold text-sm">Product Name</h3>
            <div className="text-lg font-semibold text-red-500 flex items-center gap-x-4">40.0000đ <span className='text-xs px-4 py-1 bg-red-300/70'>-5%</span></div>
            <div className='flex items-center justify-between py-2'>
                <span className="font-semibold text-xs">4.0 ⭐</span>
                <span className="font-semibold text-xs">Đã bán 400k</span>
            </div>

        </Card>
    );
};

export default CardComponent;