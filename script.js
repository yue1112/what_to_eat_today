// 菜品库
const menuDatabase = {
    vegetables: [
        { name: '土豆', unit: '斤', priceRange: [1.60, 1.73] },
        { name: '西红柿', unit: '斤', priceRange: [2.80, 5.40] },
        { name: '花菜', unit: '斤', priceRange: [3.80, 3.91] },
        { name: '包菜', unit: '斤', priceRange: [1.68, 2.10] },
        { name: '生姜', unit: '斤', priceRange: [3.57, 9.60] },
        { name: '小青菜', unit: '斤', priceRange: [2.16, 2.22] },
        { name: '玉米', unit: '斤', priceRange: [3.36, 4.80] },
        { name: '豆角', unit: '斤', priceRange: [5.40, 5.56] },
        { name: '大白菜', unit: '斤', priceRange: [1.32, 1.36] },
        { name: '蒜苔', unit: '斤', priceRange: [6.00, 7.00] },
        { name: '香葱', unit: '斤', priceRange: [5.00, 6.18] },
        { name: '生菜', unit: '斤', priceRange: [5.16, 5.31] },
        { name: '黄瓜', unit: '斤', priceRange: [1.90, 9.60] },
        { name: '蒜米', unit: '斤', priceRange: [6.72, 6.92] },
        { name: '莴笋', unit: '斤', priceRange: [2.16, 2.22] },
        { name: '茄子', unit: '斤', priceRange: [1.40, 4.20] },
        { name: '蒜苗', unit: '斤', priceRange: [5.40, 5.56] },
        { name: '毛豆仁', unit: '斤', priceRange: [12.60, 12.98] },
        { name: '胡萝卜', unit: '斤', priceRange: [1.56, 2.16] },
        { name: '芋头', unit: '斤', priceRange: [3.84, 5.00] },
        { name: '娃娃菜', unit: '包', priceRange: [3.50, 10.20] },
        { name: '韭黄', unit: '斤', priceRange: [7.20, 7.42] },
        { name: '青椒', unit: '斤', priceRange: [2.40, 5.40] },
        { name: '红椒', unit: '斤', priceRange: [6.00, 9.60] },
        { name: '金针菇', unit: '斤', priceRange: [3.00, 3.09] },
        { name: '海鲜菇', unit: '斤', priceRange: [4.80, 4.94] },
        { name: '上海青', unit: '斤', priceRange: [2.16, 2.22] },
        { name: '洋葱', unit: '斤', priceRange: [2.00, 2.80] },
        { name: '西兰花', unit: '斤', priceRange: [4.60, 4.74] },
        { name: '香菜', unit: '斤', priceRange: [15.60, 16.07] },
        { name: '杏鲍菇', unit: '斤', priceRange: [4.56, 4.70] },
        { name: '菠菜', unit: '斤', priceRange: [4.20, 7.80] },
        { name: '芹菜', unit: '斤', priceRange: [4.20, 6.18] },
        { name: '空心菜', unit: '斤', priceRange: [4.20, 4.33] },
        { name: '油麦菜', unit: '斤', priceRange: [3.20, 3.30] },
        { name: '皇帝菜', unit: '斤', priceRange: [2.80, 4.80] },
        { name: '甜豆', unit: '斤', priceRange: [10.80, 11.12] },
        { name: '山药', unit: '斤', priceRange: [7.20, 9.60] },
        { name: '丝瓜', unit: '斤', priceRange: [3.90, 8.50] },
        { name: '秋葵', unit: '斤', priceRange: [7.80, 8.03] },
        { name: '香菇', unit: '斤', priceRange: [6.00, 9.60] },
        { name: '荷兰豆', unit: '斤', priceRange: [9.60, 9.89] },
        { name: '小白菜', unit: '斤', priceRange: [2.40, 2.47] },
        { name: '冬瓜', unit: '斤', priceRange: [0.90, 1.85] },
        { name: '海带', unit: '斤', priceRange: [3.84, 5.04] },
        { name: '豆芽', unit: '斤', priceRange: [1.68, 1.73] },
        { name: '平菇', unit: '斤', priceRange: [6.60, 6.80] },
        { name: '大葱', unit: '斤', priceRange: [3.00, 3.09] },
        { name: '苦瓜', unit: '斤', priceRange: [2.50, 10.00] },
        { name: '菜心', unit: '斤', priceRange: [2.30, 5.00] },
        { name: '茭白', unit: '斤', priceRange: [8.60, 8.86] },
        { name: '芦笋', unit: '斤', priceRange: [10.80, 11.12] },
        { name: '南瓜', unit: '斤', priceRange: [1.80, 1.85] },
        { name: '韭菜', unit: '斤', priceRange: [4.20, 4.33] },
        { name: '马蹄笋', unit: '包', priceRange: [12.00, 12.36] },
        { name: '杭椒', unit: '斤', priceRange: [6.00, 6.18] },
        { name: '苋菜', unit: '斤', priceRange: [3.20, 3.30] },
        { name: '观音菜', unit: '斤', priceRange: [2.80, 2.88] },
        { name: '木耳', unit: '斤', priceRange: [3.84, 5.00] },
        { name: '面筋', unit: '斤', priceRange: [4.80, 4.94] },
        { name: '魔芋', unit: '斤', priceRange: [2.64, 2.72] },
        { name: '白萝卜', unit: '斤', priceRange: [0.68, 2.20] },
        { name: '红薯', unit: '斤', priceRange: [1.50, 2.80] }
    ],
    meat: [
        { name: '猪瘦肉', unit: '斤', priceRange: [14.00, 14.42] },
        { name: '猪后腿肉', unit: '斤', priceRange: [12.00, 12.36] },
        { name: '猪五花肉', unit: '斤', priceRange: [12.00, 15.00] },
        { name: '猪排骨', unit: '斤', priceRange: [17.80, 18.33] },
        { name: '猪前腿肉', unit: '斤', priceRange: [9.60, 9.89] },
        { name: '猪筒骨', unit: '斤', priceRange: [18.00, 18.54] },
        { name: '猪里脊', unit: '斤', priceRange: [17.80, 18.33] },
        { name: '猪蹄', unit: '斤', priceRange: [18.00, 18.54] },
        { name: '猪梅花肉', unit: '斤', priceRange: [17.60, 18.13] },
        { name: '猪肘', unit: '斤', priceRange: [14.40, 14.83] },
        { name: '猪头肉', unit: '斤', priceRange: [9.00, 9.27] },
        { name: '猪肚', unit: '斤', priceRange: [37.20, 44.50] },
        { name: '猪小肠', unit: '斤', priceRange: [18.00, 18.54] },
        { name: '猪肝', unit: '斤', priceRange: [15.60, 16.07] },
        { name: '猪腰', unit: '斤', priceRange: [33.00, 39.00] },
        { name: '猪心', unit: '斤', priceRange: [22.00, 28.00] },
        { name: '猪血', unit: '斤', priceRange: [3.60, 3.71] },
        { name: '鸡翅', unit: '斤', priceRange: [20.00, 25.00] },
        { name: '翅中', unit: '斤', priceRange: [21.00, 24.80] },
        { name: '翅根', unit: '包', priceRange: [13.00, 21.00] },
        { name: '鸡胸肉10kg', unit: '件', priceRange: [123.00, 138.00] },
        { name: '翅根10kg', unit: '件', priceRange: [125.00, 148.00] },
        { name: '鸡爪', unit: '斤', priceRange: [20.00, 25.00] },
        { name: '手枪腿', unit: '斤', priceRange: [15.00, 20.00] },
        { name: '淀粉肠', unit: '包', priceRange: [20.00, 25.00] }
    ],
    fish: [
        { name: '秋刀鱼', unit: '斤', priceRange: [16.00, 16.48] },
        { name: '小鱿鱼', unit: '斤', priceRange: [22.50, 23.18] },
        { name: '小黄鱼', unit: '斤', priceRange: [15.50, 16.00] },
        { name: '马鲛鱼', unit: '斤', priceRange: [15.80, 18.33] },
        { name: '鲳鱼', unit: '斤', priceRange: [16.50, 25.00] },
        { name: '带鱼', unit: '斤', priceRange: [15.00, 22.00] },
        { name: '草鱼', unit: '斤', priceRange: [9.80, 10.09] },
        { name: '黄瓜鱼', unit: '斤', priceRange: [17.50, 18.03] },
        { name: '花蛤', unit: '斤', priceRange: [12.00, 13.00] },
        { name: '比目鱼', unit: '斤', priceRange: [18.00, 20.00] },
        { name: '鲫鱼', unit: '斤', priceRange: [18.00, 20.00] },
        { name: '淡水鲈鱼', unit: '斤', priceRange: [12.50, 16.00] },
        { name: '黄骨鱼', unit: '斤', priceRange: [12.00, 15.00] },
        { name: '金线鱼', unit: '斤', priceRange: [20.00, 24.00] },
        { name: '小波鱼', unit: '斤', priceRange: [14.00, 18.00] },
        { name: '正方鱼', unit: '斤', priceRange: [16.00, 19.00] },
        { name: '黑莲鱼头', unit: '斤', priceRange: [20.00, 25.00] },
        { name: '黄脚海鲫鱼', unit: '斤', priceRange: [16.00, 22.00] },
        { name: '鸟鱼', unit: '斤', priceRange: [12.00, 15.00] },
        { name: '左口鱼', unit: '斤', priceRange: [22.00, 25.00] },
        { name: '半边鱼', unit: '斤', priceRange: [14.00, 18.00] },
        { name: '安康鱼', unit: '斤', priceRange: [12.00, 13.00] },
        { name: '咸油带鱼', unit: '斤', priceRange: [26.00, 30.00] },
        { name: '白鲳鱼', unit: '斤', priceRange: [20.00, 22.00] },
        { name: '美国贝', unit: '斤', priceRange: [6.00, 9.00] },
        { name: '鳗椎鱼', unit: '斤', priceRange: [22.00, 26.00] },
        { name: '水发目鱼', unit: '斤', priceRange: [35.00, 38.00] },
        { name: '黑莲鱼', unit: '斤', priceRange: [15.00, 16.00] },
        { name: '乌鱼', unit: '斤', priceRange: [20.00, 25.00] },
        { name: '鱿鱼须', unit: '斤', priceRange: [12.00, 15.00] },
        { name: '斧头鱼', unit: '斤', priceRange: [13.00, 18.00] },
        { name: '歪头鱼', unit: '斤', priceRange: [9.00, 11.00] },
        { name: '咸黄瓜鱼干', unit: '斤', priceRange: [30.00, 34.00] },
        { name: '小石斑', unit: '斤', priceRange: [14.00, 16.00] },
        { name: '金鲳鱼', unit: '斤', priceRange: [12.00, 20.00] },
        { name: '香鱼', unit: '斤', priceRange: [15.00, 21.00] },
        { name: '白古鱼', unit: '斤', priceRange: [14.00, 18.00] },
        { name: '提鱼', unit: '斤', priceRange: [10.00, 13.00] },
        { name: '水淀鱼', unit: '斤', priceRange: [16.00, 18.00] },
        { name: '鲢鱼尾', unit: '斤', priceRange: [6.00, 7.00] },
        { name: '白鲢鱼头', unit: '斤', priceRange: [16.00, 18.00] },
        { name: '大口鱼', unit: '斤', priceRange: [13.00, 18.00] },
        { name: '黄梅鱼', unit: '斤', priceRange: [15.00, 20.00] },
        { name: '马头鱼', unit: '斤', priceRange: [13.00, 19.00] },
        { name: '老蛏', unit: '斤', priceRange: [22.00, 25.00] },
        { name: '多宝鱼', unit: '斤', priceRange: [26.00, 28.00] }
    ],
    staple: [
        { name: '大米', unit: '袋', priceRange: [45.00, 51.00] },
        { name: '面粉', unit: '袋', priceRange: [32.00, 38.00] },
        { name: '食用油', unit: '桶', priceRange: [42.00, 158.00] },
        { name: '生抽', unit: '瓶', priceRange: [15.00, 16.00] },
        { name: '葵花籽油', unit: '件', priceRange: [340.00, 410.00] },
        { name: '花生酱', unit: '瓶', priceRange: [21.00, 25.00] },
        { name: '豉汁王', unit: '包', priceRange: [4.00, 6.00] },
        { name: '蚝油', unit: '桶', priceRange: [45.00, 47.00] },
        { name: '鸡精', unit: '包', priceRange: [16.00, 20.00] },
        { name: '辣鲜露', unit: '件', priceRange: [15.00, 210.00] },
        { name: '大豆油', unit: '桶', priceRange: [120.00, 124.00] },
        { name: '老抽', unit: '瓶', priceRange: [10.00, 12.00] },
        { name: '长糯米', unit: '包', priceRange: [5.00, 7.00] },
        { name: '白砂糖', unit: '斤', priceRange: [5.00, 6.00] },
        { name: '食用盐', unit: '包', priceRange: [1.40, 2.50] },
        { name: '陈醋', unit: '件', priceRange: [45.00, 70.00] },
        { name: '蒸鱼豉油', unit: '件', priceRange: [108.00, 240.00] },
        { name: '味精', unit: '件', priceRange: [125.00, 149.00] },
        { name: '米醋', unit: '瓶', priceRange: [6.00, 8.00] },
        { name: '玫瑰腐乳', unit: '瓶', priceRange: [7.00, 9.90] },
        { name: '排骨酱', unit: '瓶', priceRange: [18.00, 20.00] },
        { name: '叉烧酱', unit: '瓶', priceRange: [17.00, 20.00] },
        { name: '海鲜酱', unit: '瓶', priceRange: [15.00, 18.00] },
        { name: '浓缩鸡汁', unit: '瓶', priceRange: [27.00, 32.00] },
        { name: '橄榄油', unit: '桶', priceRange: [139.00, 158.00] },
        { name: '虾露', unit: '桶', priceRange: [50.00, 60.00] },
        { name: '红方豆腐乳', unit: '件', priceRange: [80.00, 100.00] },
        { name: '冰糖', unit: '斤', priceRange: [5.00, 6.00] },
        { name: '料酒', unit: '瓶', priceRange: [6.00, 8.50] }
    ],
    other: [
        { name: '肉松', unit: '包', priceRange: [15.00, 18.00] },
        { name: '紫菜', unit: '包', priceRange: [15.00, 58.00] },
        { name: '梅菜笋丝', unit: '包', priceRange: [1.00, 1.50] },
        { name: '米粉', unit: '斤', priceRange: [5.00, 7.00] },
        { name: '火腿肠', unit: '包', priceRange: [13.00, 17.00] },
        { name: '榨菜', unit: '包', priceRange: [1.50, 2.00] },
        { name: '酸菜', unit: '件', priceRange: [70.00, 75.00] },
        { name: '阳春面', unit: '捆', priceRange: [2.40, 3.50] },
        { name: '咸蛋', unit: '个', priceRange: [1.30, 2.00] },
        { name: '腐竹', unit: '件', priceRange: [130.00, 170.00] },
        { name: '白粿', unit: '斤', priceRange: [3.00, 3.00] },
        { name: '长寿面', unit: '包', priceRange: [15.00, 20.00] },
        { name: '扁面', unit: '斤', priceRange: [5.00, 8.00] },
        { name: '黄豆', unit: '斤', priceRange: [4.50, 5.20] }
    ]
};

// 数字转中文大写
function numberToChineseAmount(num) {
    const digits = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
    const units = ['', '拾', '佰', '仟', '万', '拾', '佰', '仟', '亿'];
    const decimal = ['角', '分'];
    
    let result = '';
    const numStr = num.toFixed(2);
    const integerPart = Math.floor(num).toString();
    const decimalPart = numStr.split('.')[1];

    // 处理整数部分
    for (let i = 0; i < integerPart.length; i++) {
        const digit = parseInt(integerPart[i]);
        const unit = units[integerPart.length - 1 - i];
        if (digit !== 0) {
            result += digits[digit] + unit;
        } else {
            if (result[result.length - 1] !== '零') {
                result += '零';
            }
        }
    }
    
    result += '元';

    // 处理小数部分
    if (parseInt(decimalPart) === 0) {
        result += '整';
    } else {
        for (let i = 0; i < 2; i++) {
            const digit = parseInt(decimalPart[i]);
            if (digit !== 0) {
                result += digits[digit] + decimal[i];
            }
        }
    }

    return result;
}

// 验证税号
function validateTaxNumber(taxNumber) {
    // 统一社会信用代码为18位
    const pattern = /^[0-9A-Z]{18}$/;
    return pattern.test(taxNumber);
}

function generateRandomPrice(min, max) {
    // 生成一个在最小值和最大值之间的随机价格，保留两位小数
    return +(min + Math.random() * (max - min)).toFixed(2);
}

function generateRandomQuantity(peopleCount, isMainDish) {
    if (isMainDish) {
        return Math.ceil(peopleCount / 2);
    }
    return Math.ceil(peopleCount / 3);
}

function getRequiredCounts(totalAmount) {
    // 根据总金额确定每个类别需要的商品数量
    let counts = {
        vegetables: 1, // 至少1个蔬菜
        meat: 1,      // 至少1个肉类
        fish: 1,      // 至少1个鱼类
        other: 0,
        staple: 0
    };

    if (totalAmount <= 500) {
        counts.other = 1;
    } else if (totalAmount <= 1000) {
        counts.vegetables = 2;
        counts.meat = 2;
        counts.fish = 2;
        counts.other = 2;
    } else if (totalAmount <= 2000) {
        counts.vegetables = 3;
        counts.meat = 3;
        counts.fish = 2;
        counts.other = 2;
        counts.staple = 1;
    } else {
        counts.vegetables = 4;
        counts.meat = 3;
        counts.fish = 3;
        counts.other = 3;
        counts.staple = 2;
    }

    return counts;
}

function generateMenuItems() {
    const totalAmount = parseFloat(document.getElementById('total-amount').value);
    const purchaseDate = document.getElementById('invoice-date').value;
    
    if (isNaN(totalAmount) || totalAmount <= 0) {
        alert('请输入有效的总金额！');
        return;
    }

    if (!purchaseDate) {
        alert('请选择采购日期！');
        return;
    }

    const menuItems = [];
    let currentTotal = 0;
    let remainingAmount = totalAmount;
    let serialNumber = 1;

    // 获取每个类别需要的商品数量
    const requiredCounts = getRequiredCounts(totalAmount);
    const categories = ['vegetables', 'meat', 'fish', 'other', 'staple'];
    
    // 用于跟踪已选择的商品
    const selectedItems = new Set();

    // 为每个类别添加商品
    for (let category of categories) {
        if (requiredCounts[category] === 0) continue;

        const items = menuDatabase[category];
        if (!items) continue;

        // 设置每个商品的数量范围
        let minQuantity, maxQuantity;
        if (category === 'vegetables') {
            minQuantity = 10;  // 最小数量保持20
            maxQuantity = 15;  // 最大数量改为40
        } else if (category === 'meat') {
            minQuantity = 10;
            maxQuantity = 15;
        } else if (category === 'fish') {
            minQuantity = 10;
            maxQuantity = 15;
        } else if (category === 'other') {
            minQuantity = 10;
            maxQuantity = 15;
        } else if (category === 'staple') {
            minQuantity = 1;
            maxQuantity = 3;
        }

        // 获取该类别中还未使用的商品
        const availableItems = items.filter(item => !selectedItems.has(item.name));
        if (availableItems.length === 0) continue;

        // 随机选择指定数量的商品
        const shuffledItems = [...availableItems].sort(() => Math.random() - 0.5)
            .slice(0, Math.min(requiredCounts[category], availableItems.length));

        for (let item of shuffledItems) {
            if (remainingAmount < 1) break;

            let price = generateRandomPrice(item.priceRange[0], item.priceRange[1]);
            
            // 确保数量在指定范围内
            let quantity = Math.floor(Math.random() * (maxQuantity - minQuantity + 1)) + minQuantity;
            
            // 确保不超出预算
            const maxPossibleQuantity = Math.floor(remainingAmount / price);
            if (maxPossibleQuantity < minQuantity) {
                // 如果预算不够，尝试调整价格
                price = remainingAmount / minQuantity;
                if (price >= item.priceRange[0] && price <= item.priceRange[1]) {
                    quantity = minQuantity;
                } else {
                    continue;
                }
            } else {
                quantity = Math.min(quantity, maxPossibleQuantity);
            }

            let subtotal = +(price * quantity).toFixed(2);

            if (currentTotal + subtotal <= totalAmount) {
                menuItems.push({
                    serialNumber: serialNumber++,
                    date: purchaseDate,
                    name: item.name,
                    unit: item.unit,
                    quantity: quantity,
                    price: price,
                    subtotal: subtotal
                });

                // 记录已使用的商品
                selectedItems.add(item.name);
                currentTotal = +(currentTotal + subtotal).toFixed(2);
                remainingAmount = +(totalAmount - currentTotal).toFixed(2);
            }
        }
    }

    // 如果还有较大金额剩余，继续添加商品
    while (remainingAmount > 20) {
        const availableCategories = categories.filter(c => c !== 'staple');
        const category = availableCategories[Math.floor(Math.random() * availableCategories.length)];
        
        const items = menuDatabase[category];
        // 获取该类别中还未使用的商品
        const availableItems = items.filter(item => !selectedItems.has(item.name));
        if (availableItems.length === 0) continue;

        const item = availableItems[Math.floor(Math.random() * availableItems.length)];

        let minQuantity, maxQuantity;
        if (category === 'vegetables') {
            minQuantity = 10;  // 最小数量保持20
            maxQuantity = 15;  // 最大数量改为40
        } else if (category === 'meat') {
            minQuantity = 10;
            maxQuantity = 15;
        } else if (category === 'fish') {
            minQuantity = 10;
            maxQuantity = 15;
        } else if (category === 'other') {
            minQuantity = 10;
            maxQuantity = 15;
        }

        let price = generateRandomPrice(item.priceRange[0], item.priceRange[1]);
        let quantity = Math.floor(Math.random() * (maxQuantity - minQuantity + 1)) + minQuantity;
        
        const maxPossibleQuantity = Math.floor(remainingAmount / price);
        if (maxPossibleQuantity < minQuantity) {
            continue;
        }
        
        quantity = Math.min(quantity, maxPossibleQuantity);
        let subtotal = +(price * quantity).toFixed(2);

        if (currentTotal + subtotal <= totalAmount) {
            menuItems.push({
                serialNumber: serialNumber++,
                date: purchaseDate,
                name: item.name,
                unit: item.unit,
                quantity: quantity,
                price: price,
                subtotal: subtotal
            });

            // 记录已使用的商品
            selectedItems.add(item.name);
            currentTotal = +(currentTotal + subtotal).toFixed(2);
            remainingAmount = +(totalAmount - currentTotal).toFixed(2);
        }
    }

    // 在生成完菜单后，检查是否包含必需的类别
    const hasVegetables = menuItems.some(item => menuDatabase.vegetables.some(veg => veg.name === item.name));
    const hasMeat = menuItems.some(item => menuDatabase.meat.some(m => m.name === item.name));
    const hasFish = menuItems.some(item => menuDatabase.fish.some(f => f.name === item.name));

    if (!hasVegetables || !hasMeat || !hasFish) {
        // 如果缺少必需类别，重新生成菜单
        return generateMenuItems();
    }

    displayMenuItems(menuItems, currentTotal);
}

function displayMenuItems(menuItems, total) {
    const menuList = document.getElementById('menu-list');
    menuList.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>序号</th>
                    <th>采购日期</th>
                    <th>菜品名称</th>
                    <th>单位</th>
                    <th>数量</th>
                    <th>单价(元)</th>
                    <th>金额(元)</th>
                </tr>
            </thead>
            <tbody>
                ${menuItems.map(item => `
                    <tr>
                        <td>${item.serialNumber}</td>
                        <td>${item.date}</td>
                        <td>${item.name}</td>
                        <td>${item.unit}</td>
                        <td>${item.quantity}</td>
                        <td>${item.price.toFixed(2)}</td>
                        <td>${item.subtotal.toFixed(2)}</td>
                    </tr>
                `).join('')}
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="6" style="text-align: right;"><strong>总计：</strong></td>
                    <td><strong>${total.toFixed(2)}</strong></td>
                </tr>
            </tfoot>
        </table>
    `;

    document.getElementById('final-amount').textContent = total.toFixed(2);
    document.getElementById('amount-in-words').textContent = numberToChineseAmount(total);
}

function previewInvoice() {
    const menuList = document.getElementById('menu-list');
    if (!menuList.innerHTML.trim()) {
        alert('请先生成明细！');
        return;
    }

    // 生成发票号码（当前日期+4位随机数）
    const today = new Date();
    const dateStr = today.getFullYear().toString().slice(-2) +
                   (today.getMonth() + 1).toString().padStart(2, '0') +
                   today.getDate().toString().padStart(2, '0');
    const randomNum = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    const invoiceNumber = dateStr + randomNum;

    const previewWindow = window.open('', '_blank');
    const totalAmount = document.getElementById('final-amount').textContent;

    previewWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>买菜发票预览</title>
            <style>
                body { font-family: SimSun, serif; margin: 20px; }
                .invoice-header { text-align: center; margin-bottom: 20px; }
                .invoice-title { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
                .info-row { margin: 10px 0; }
                .info-label { display: inline-block; width: 100px; }
                table { width: 100%; border-collapse: collapse; margin: 20px 0; }
                th, td { border: 1px solid #000; padding: 8px; text-align: left; }
                .amount-row { text-align: right; margin: 10px 0; }
                .amount-in-words { margin: 20px 0; }
                @media print {
                    body { margin: 0; }
                    .no-print { display: none; }
                }
            </style>
        </head>
        <body>
            <div class="invoice-header">
                <div class="invoice-title">买菜发票</div>
                <div>发票号码：${invoiceNumber}</div>
            </div>
            
            <div class="info-row">
                <span class="info-label">购买方名称：</span>${document.getElementById('company-name').value}
            </div>
            <div class="info-row">
                <span class="info-label">纳税人识别号：</span>${document.getElementById('tax-number').value}
            </div>
            <div class="info-row">
                <span class="info-label">采购日期：</span>${document.getElementById('invoice-date').value}
            </div>

            ${menuList.innerHTML}

            <div class="amount-in-words">
                金额大写：${numberToChineseAmount(parseFloat(totalAmount))}
            </div>

            <button class="no-print" onclick="window.print()" style="margin-top: 20px;">打印发票</button>
        </body>
        </html>
    `);
}

function saveInvoice() {
    const menuList = document.getElementById('menu-list');
    if (!menuList.innerHTML.trim()) {
        alert('请先生成明细！');
        return;
    }

    const invoiceData = {
        companyName: document.getElementById('company-name').value,
        taxNumber: document.getElementById('tax-number').value,
        date: document.getElementById('invoice-date').value,
        totalAmount: document.getElementById('final-amount').textContent,
        menuHtml: menuList.innerHTML,
        timestamp: new Date().getTime()
    };
    
    // 保存到本地存储
    let history = JSON.parse(localStorage.getItem('invoiceHistory') || '[]');
    history.unshift(invoiceData);
    localStorage.setItem('invoiceHistory', JSON.stringify(history));
    
    // 更新历史记录显示
    updateHistoryList();
    
    alert('发票信息已保存！');
}

function updateHistoryList() {
    const history = JSON.parse(localStorage.getItem('invoiceHistory') || '[]');
    const historyList = document.getElementById('history-list');
    
    historyList.innerHTML = history.map(item => `
        <div class="history-item">
            <div>
                <strong>${item.companyName}</strong>
                <span>${item.date}</span>
            </div>
            <div>
                <span>￥${item.totalAmount}</span>
                <button onclick="downloadInvoice(${item.timestamp})">下载</button>
            </div>
        </div>
    `).join('');
}

function downloadInvoice(timestamp) {
    const history = JSON.parse(localStorage.getItem('invoiceHistory') || '[]');
    const invoice = history.find(item => item.timestamp === timestamp);
    
    if (!invoice) {
        alert('未找到发票信息！');
        return;
    }

    // 创建下载内容
    const content = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>发票下载</title>
            <style>
                body { font-family: SimSun, serif; margin: 20px; }
                .invoice-header { text-align: center; margin-bottom: 20px; }
                .invoice-title { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
                .info-row { margin: 10px 0; }
                .info-label { display: inline-block; width: 100px; }
                table { width: 100%; border-collapse: collapse; margin: 20px 0; }
                th, td { border: 1px solid #000; padding: 8px; text-align: left; }
                .amount-row { text-align: right; margin: 10px 0; }
                .amount-in-words { margin: 20px 0; }
                @media print {
                    body { margin: 0; }
                    button { display: none; }
                }
            </style>
        </head>
        <body>
            <div class="invoice-header">
                <div class="invoice-title">餐饮服务发票</div>
                <div>发票号码：${timestamp.toString().slice(-12)}</div>
            </div>
            
            <div class="info-row">
                <span class="info-label">购买方名称：</span>${invoice.companyName}
            </div>
            <div class="info-row">
                <span class="info-label">纳税人识别号：</span>${invoice.taxNumber}
            </div>
            <div class="info-row">
                <span class="info-label">开票日期：</span>${invoice.date}
            </div>

            ${invoice.menuHtml}

            <div class="amount-row">
                <span>价税合计：￥${invoice.totalAmount}</span>
            </div>
            
            <div class="amount-in-words">
                金额大写：${numberToChineseAmount(parseFloat(invoice.totalAmount))}
            </div>

            <button onclick="window.print()" style="margin-top: 20px;">打印发票</button>
        </body>
        </html>
    `;

    // 创建新窗口并打印
    const printWindow = window.open('', '_blank');
    printWindow.document.write(content);
    printWindow.document.close();
}

// 页面加载时显示历史记录
window.onload = function() {
    updateHistoryList();
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    document.getElementById('invoice-date').value = formattedDate;
};

// 添加导出到Excel的功能
function exportToExcel() {
    const menuItems = document.querySelectorAll('#menu-list tbody tr');
    const data = [
        ['采购清单'],  // 标题
        ['序号', '采购日期', '菜品名称', '类别', '单位', '数量', '单价(元)', '金额(元)', '备注']  // 表头
    ];

    let startRow = 3; // 数据开始行
    let currentRow = startRow;

    // 添加菜品数据
    menuItems.forEach(row => {
        const cells = row.querySelectorAll('td');
        const rowData = Array.from(cells).map(cell => cell.textContent);
        const itemName = rowData[2];
        
        // 在菜品名称后插入类别
        let category = '';
        if (menuDatabase.vegetables.some(item => item.name === itemName)) {
            category = '蔬菜';
        } else if (menuDatabase.meat.some(item => item.name === itemName)) {
            category = '肉类';
        } else if (menuDatabase.fish.some(item => item.name === itemName)) {
            category = '海鲜';
        } else if (menuDatabase.staple.some(item => item.name === itemName)) {
            category = '调味品';
        } else if (menuDatabase.other.some(item => item.name === itemName)) {
            category = '干货';
        }

        // 重新组织数据，加入类别列
        const newRowData = [
            rowData[0], // 序号
            rowData[1], // 日期
            rowData[2], // 菜品名称
            category,   // 类别
            rowData[3], // 单位
            rowData[4], // 数量
            rowData[5], // 单价
            { f: `F${currentRow}*G${currentRow}` }, // 金额 = 数量*单价
            ''         // 备注
        ];
        
        data.push(newRowData);
        currentRow++;
    });

    let lastDataRow = currentRow - 1;
    
    // 添加合计行
    data.push([
        '总计', 
        '', 
        '', 
        '',
        '', 
        '', 
        '', 
        { f: `SUM(H${startRow}:H${lastDataRow})` },
        ''
    ]);
    currentRow++;
    let totalRow = currentRow - 1;

    data.push(['签收人']);
    currentRow++;
    data.push([]);  // 空行
    currentRow++;

    // 使用类别列来计算各类别合计
    let vegTotal = { f: `SUMIF(D${startRow}:D${lastDataRow}, "蔬菜", H${startRow}:H${lastDataRow})` };
    let meatTotal = { f: `SUMIF(D${startRow}:D${lastDataRow}, "肉类", H${startRow}:H${lastDataRow})` };
    let fishTotal = { f: `SUMIF(D${startRow}:D${lastDataRow}, "海鲜", H${startRow}:H${lastDataRow})` };
    let stapleTotal = { f: `SUMIF(D${startRow}:D${lastDataRow}, "调味品", H${startRow}:H${lastDataRow})` };
    let otherTotal = { f: `SUMIF(D${startRow}:D${lastDataRow}, "干货", H${startRow}:H${lastDataRow})` };

    // 添加类别合计
    data.push(['蔬菜类合计:', '', '', '', '', '', '', vegTotal]);
    data.push(['肉类合计:', '', '', '', '', '', '', meatTotal]);
    data.push(['水产海鲜:', '', '', '', '', '', '', fishTotal]);
    data.push(['调味品类:', '', '', '', '', '', '', stapleTotal]);
    data.push(['干货类合计:', '', '', '', '', '', '', otherTotal]);

    // 创建工作簿
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(data);

    // 设置单元格格式
    ws['!cols'] = [
        { wch: 8 },   // 序号
        { wch: 12 },  // 采购日期
        { wch: 15 },  // 菜品名称
        { wch: 8 },   // 类别
        { wch: 8 },   // 单位
        { wch: 8 },   // 数量
        { wch: 10 },  // 单价
        { wch: 12 },  // 金额
        { wch: 12 }   // 备注
    ];

    // 合并标题单元格
    ws['!merges'] = [
        { s: { r: 0, c: 0 }, e: { r: 0, c: 8 } }  // 合并第一行的所有列
    ];

    // 设置标题样式
    ws['A1'] = { 
        v: '采购清单',
        s: {
            font: { sz: 14, bold: true },
            alignment: { horizontal: 'center', vertical: 'center' }
        }
    };

    XLSX.utils.book_append_sheet(wb, ws, '采购清单');
    XLSX.writeFile(wb, '采购清单.xlsx');
}

// 检查重复菜品的函数
function checkDuplicateItems() {
    const categories = ['vegetables', 'meat', 'fish', 'staple', 'other'];
    const duplicates = {};
    
    // 检查每个类别内的重复
    categories.forEach(category => {
        const items = menuDatabase[category];
        const nameCount = {};
        
        items.forEach(item => {
            if (!nameCount[item.name]) {
                nameCount[item.name] = 1;
            } else {
                nameCount[item.name]++;
                if (!duplicates[category]) {
                    duplicates[category] = {};
                }
                duplicates[category][item.name] = nameCount[item.name];
            }
        });
    });

    // 检查跨类别的重复
    const allItems = {};
    categories.forEach(category => {
        menuDatabase[category].forEach(item => {
            if (!allItems[item.name]) {
                allItems[item.name] = [category];
            } else {
                allItems[item.name].push(category);
            }
        });
    });

    const crossCategoryDuplicates = {};
    Object.entries(allItems).forEach(([name, categories]) => {
        if (categories.length > 1) {
            crossCategoryDuplicates[name] = categories;
        }
    });

    // 输出结果
    console.log('=== 类别内重复项 ===');
    Object.entries(duplicates).forEach(([category, items]) => {
        console.log(`\n${category}类别中的重复项：`);
        Object.entries(items).forEach(([name, count]) => {
            console.log(`${name}: 出现${count}次`);
        });
    });

    console.log('\n=== 跨类别重复项 ===');
    Object.entries(crossCategoryDuplicates).forEach(([name, categories]) => {
        console.log(`${name}: 出现在 ${categories.join(', ')} 类别中`);
    });

    return { duplicates, crossCategoryDuplicates };
}

// 在原有代码后面添加这个函数调用
checkDuplicateItems(); 