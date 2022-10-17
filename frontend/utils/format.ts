import moment from "moment"

export const formatTime = (time: Date) => moment(time).format("ll")
