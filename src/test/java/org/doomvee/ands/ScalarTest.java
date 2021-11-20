package org.doomvee.ands;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

import static org.junit.jupiter.api.Assertions.*;

class ScalarTest {
  @Test
  public void test() {
    assertEquals(4, 2 + 2, "2 + 2 should be 4");
  }

  @ParameterizedTest
  @ValueSource(ints = {1, 3, 5, 11, Integer.MAX_VALUE})
  public void isOdd(int input) {
    assertEquals(1, Math.abs(input % 2), "Should be odd!");
  }
}