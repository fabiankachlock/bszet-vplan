// https://frei.bszet.de/inhalt/Blockplaene/BGy/Schuljahresablauf%20BSZ%202021-2022.pdf
// "day since 1970": "iteration"

import { Day, Iteration } from "./domain";

const DATA: { [day: number]: Iteration } = {
  18876: 1, // "06.09.2021"
  18883: 2, // "13.09.2021"
  18890: 1, // "20.09.2021"
  18897: 2, // "27.09.2021"
  18904: 1, // "04.10.2021"
  18911: 2, // "11.10.2021"
  18932: 1, // "01.11.2021"
  18939: 2, // "08.11.2021"
  18946: 1, // "15.11.2021"
  18953: 2, // "22.11.2021"
  18960: 1, // "29.11.2021"
  18967: 2, // "06.12.2021"
  18974: 1, // "13.12.2021"
  18981: 2, // "20.12.2021"
  18995: 1, // "03.01.2022"
  19002: 2, // "10.01.2022"
  19009: 1, // "17.01.2022"
  19016: 2, // "24.01.2022"
  19023: 1, // "31.01.2022"
  19030: 2, // "07.02.2022"
  19051: 1, // "28.02.2022"
  19058: 2, // "07.03.2022"
  19065: 1, // "14.03.2022"
  19072: 2, // "21.03.2022"
  19079: 1, // "28.03.2022"
  19086: 2, // "04.04.2022"
  19093: 1, // "11.04.2022"
  19107: 2, // "25.04.2022"
  19114: 1, // "02.05.2022"
  19121: 2, // "09.05.2022"
  19128: 1, // "16.05.2022"
  19135: 2, // "23.05.2022"
  19142: 1, // "30.05.2022"
  19149: 2, // "07.06.2022"
  19156: 1, // "13.06.2022"
  19163: 2, // "20.06.2022"
  19170: 1, // "27.06.2022"
  19177: 2, // "04.07.2022"
  19184: 1, // "11.07.2022"

  // SUMMER HOLIDAYS 2022 🌴

  19233: 1, // "29.08.2022"
  19240: 2, // "05.09.2022"
  19247: 1, // "12.09.2022"
  19254: 2, // "19.09.2022"
  19261: 1, // "26.09.2022"
  19275: 2, // "10.10.2022"
  19303: 1, // "07.11.2022"
  19310: 2, // "14.11.2022"
  19317: 1, // "21.11.2022"
  19324: 2, // "28.11.2022"
  19331: 1, // "05.12.2022"
  19338: 2, // "12.12.2022"
  19345: 1, // "19.12.2022"
  19359: 2, // "02.01.2023"
  19366: 1, // "09.01.2023"
  19373: 2, // "16.01.2023"
  19380: 1, // "23.01.2023"
  19387: 2, // "30.01.2023"
  19394: 1, // "06.02.2023"
  19408: 2, // "20.02.2023"
  19422: 1, // "06.03.2023"
  19429: 2, // "13.03.2023"
  19436: 1, // "20.03.2023"
  19443: 2, // "27.03.2023"
  19450: 1, // "03.04.2023"
  19464: 2, // "17.04.2023"
  19471: 1, // "24.04.2023"
  19485: 2, // "08.05.2023"
  19492: 1, // "15.05.2023"
  19499: 2, // "22.05.2023"
  19513: 1, // "05.06.2023"
  19520: 2, // "12.06.2023"
  19527: 1, // "19.06.2023"
  19534: 2, // "26.06.2023"
  19541: 1, // "03.07.2023"
};

export function getIteration(date?: Date): Iteration | null {
  const time = Math.round(
    (date?.getTime() ?? Date.now()) / 1000 / 60 / 60 / 24
  );

  for (let i = time - 6; i <= time; i++) {
    if (DATA[i]) {
      return DATA[i];
    }
  }

  return null;
}

export function applyIteration(iteration: Iteration, timetable: Day): Day {
  return timetable.filter(
    (lesson) =>
      typeof lesson.iteration !== "number" || lesson.iteration === iteration
  );
}
