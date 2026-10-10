import history01 from "../assets/history/history-01.jpeg"
import history02 from "../assets/history/history-02.jpeg"
import history03 from "../assets/history/history-03.jpeg"
import history04 from "../assets/history/history-04.jpeg"
import history05 from "../assets/history/history-05.jpeg"
import history06 from "../assets/history/history-06.jpeg"
import history07 from "../assets/history/history-07.jpeg"
import history08 from "../assets/history/history-08.jpeg"
import history09 from "../assets/history/history-09.jpeg"
import history10 from "../assets/history/history-10.jpeg"

export interface HistoryGalleryImage {
  src: string
  alt: string
  caption?: string
  year?: string
  sortOrder?: number
  orientation?: "rotate-left"
}

// Individual dates and a verified chronology have not yet been supplied.
// Keep entries in upload order until church leadership can confirm them.
export const historyGalleryImages: HistoryGalleryImage[] = [
  {
    src: history01,
    alt: "A preacher standing at a lectern inside the HOPFAN church",
  },
  {
    src: history02,
    alt: "A congregation gathered inside an early HOPFAN church structure",
    orientation: "rotate-left",
  },
  {
    src: history03,
    alt: "Church members gathered for a group photograph inside an early church building",
    orientation: "rotate-left",
  },
  {
    src: history04,
    alt: "An early HOPFAN pulpit inside a timber and corrugated iron church structure",
    orientation: "rotate-left",
  },
  {
    src: history05,
    alt: "Church members seated together during an early HOPFAN gathering",
    orientation: "rotate-left",
  },
  {
    src: history06,
    alt: "Exterior of an early temporary HOPFAN church structure in Mtwapa",
  },
  {
    src: history07,
    alt: "A large congregation gathered inside an early HOPFAN church structure",
    orientation: "rotate-left",
  },
  {
    src: history08,
    alt: "Church members gathered around a motorcycle during a community moment",
    orientation: "rotate-left",
  },
  {
    src: history09,
    alt: "Congregants worshipping together during an early church service",
    orientation: "rotate-left",
  },
  {
    src: history10,
    alt: "An early open-sided HOPFAN church building under construction",
    orientation: "rotate-left",
  },
]
