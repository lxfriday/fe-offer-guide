# 大厂前端 offer 收割指南

## JavaScript

### 作用域和作用域链

### JS 执行上下文

## DOM

## 动画

## V8 专区

## NodeJS

## 算法

### 排序算法

![排序算法一览](./static/imgs/sort.png)

#### 冒泡排序

![](./static/imgs/bubbleSort.png)

```typescript
function swap(arr: number[], a: number, b: number) {
  const tmp: number = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}

export function bubbleSort(arr: number[]) {
  const length = arr.length;
  if (length <= 1) return arr;
  for (let i = 0; i < length; i++) {
    let changed: boolean = false; // 没有数据交换则表示已经有序了
    for (let j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        changed = true;
      }
    }
    if (!changed) break;
  }
  return arr;
}
```

#### 鸡尾酒排序

#### 选择排序

#### 插入排序

#### 归并排序

#### 快速排序

#### 堆排序

#### 计数排序

#### 桶排序

#### 基数排序
