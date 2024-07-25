export type CountryType = {
    name: string,
    iso: string,
    flag: string,
    participations: number,
    first_appearance: string,
    best_result: {
      place: number,
      years: []
    },
    worst_result: {
      place: number,
      years: []
    },
    average_place: number,
    member_stations: string,
    national_selection: string,
    external_links: string,
    participants: ParticipantType[]
}

export type ParticipantType = {
  year: string,
  semifinal: number,
  performer: string,
  song: string,
  place: number,
  points: number
}