import COLORS from "../colors";

describe("Color settings colorpicker colors", () => {
  it("should be set to specific list of colors", () => {
    expect(COLORS).toEqual([
      "#00FFFF",
      "#3FE0D0",
      "#0080FF",
      "#0F52BA",
      "#000080",
      "#111E6C",
      "#1D2951",
      "#003152",
      "#152238",
      "#1C2E4A",
      "#03002E",
      "#010048",
      "#FF0000",
      "#FF0800",
      "#FF2400",
      "#FF2800",
      "#C21807",
      "#B80F0A",
      "#960018",
      "#7C0A02",
      "#800000",
      "#420D09",
      "#1C0000",
      "#0E0000",
    ]);
  });

  it("should has length divisible by 6 to create a full lines for circle picker", () => {
    expect(COLORS.length % 6).toEqual(0);
  });
});
