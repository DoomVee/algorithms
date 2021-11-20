package org.doomvee.ands;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import java.util.HashMap;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

class SorterTest {
  static Map<Integer[], Integer[]> sorted = new HashMap<>();

  @BeforeAll
  public static void init() {
    sorted.put(new Integer[]{1, 0, 3, 2}, new Integer[]{0, 1, 2, 3});
  }

  @Test
  @Disabled
  public void testBubbleSort() {
    sorted.forEach((shuffledArray, sortedArray) -> assertArrayEquals(sortedArray, Sorter.bubbleSort(shuffledArray),
        "Bubble Sort Impl. does not sort the array properly!"));
  }

  @Test
  @Disabled
  public void testMergeSort() {
    sorted.forEach((shuffledArray, sortedArray) -> assertArrayEquals(sortedArray, Sorter.mergeSort(shuffledArray),
        "Merge Sort Impl. does not sort the array properly!"));
  }
}