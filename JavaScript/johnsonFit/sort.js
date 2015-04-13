// I have used quick sort algorithm to do the sorting
// Quick sort runs in average of O(n log n) time

function swap(items, firstIndex, secondIndex) {
    
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

function partition(items, left, right) {

    var pivot   = items[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;

    while (i <= j) {

        while (items[i] < pivot) {
            i++;
        }

        while (items[j] > pivot) {
            j--;
        }

        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }

    return i;
}

function custom_sort(items, left, right) {

    var index;

    if (items.length > 1) {

        left = typeof left != "number" ? 0 : left;
        right = typeof right != "number" ? items.length - 1 : right;

        index = partition(items, left, right);

        if (left < index - 1) {
            custom_sort(items, left, index - 1);
        }

        if (index < right) {
            custom_sort(items, index, right);
        }

    }

    return items;
}

var result = custom_sort([1, 5, 2, 8, 9, 5, 3, 7]);
console.log(result);