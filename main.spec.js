describe("Test functions:", function () {
  it("ageClassification()", function () {
    expect(ageClassification(-1)).toBe(null);
    expect(ageClassification(1)).toBe("детский возраст");
    expect(ageClassification(24)).toBe("детский возраст");
    expect(ageClassification(24.01)).toBe("молодой возраст");
    expect(ageClassification(44)).toBe("молодой возраст");
    expect(ageClassification(44.01)).toBe("средний возраст");
    expect(ageClassification(65)).toBe("средний возраст");
    expect(ageClassification(65.01)).toBe("пожилой возраст");
    expect(ageClassification(75)).toBe("пожилой возраст");
    expect(ageClassification(75.01)).toBe("старческий возраст");
    expect(ageClassification(90)).toBe("старческий возраст");
    expect(ageClassification(90.01)).toBe("долгожители");
    expect(ageClassification(122)).toBe("долгожители");
    expect(ageClassification(122.01)).toBe(null);
    expect(ageClassification(150)).toBe(null);
  });
  it("weekFn()", function () {
    expect(weekFn(1)).toBe("Понедельник");
    expect(weekFn(5)).toBe("Пятница");
    expect(weekFn(0.5)).toBe(null);
    expect(weekFn(8)).toBe(null);
  });
  it("mainFunc()", function () {
    expect(mainFunc(2, 5, cbRandom)).not.toBeLessThan(2);
    expect(mainFunc(2, 5, cbRandom)).not.toBeGreaterThan(5);
    expect(mainFunc(2, 5, cbPow)).toBe(32);
    expect(mainFunc(2, 5, cbAdd)).toBe(7);
    expect(mainFunc(2, 5, "text")).toBe(false);
  });
});
