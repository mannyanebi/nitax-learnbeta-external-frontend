import React from "react";
import { Box, Text, AspectRatio } from "@mantine/core";

interface Props {
  topic: any
}

const LessonTranscript: React.FC<Props> = ({ topic }) => {
  return (
    <Box>
      <Text className="font-semibold text-lg">
        {topic.name}
      </Text>

      <Box className="mt-4">
        <AspectRatio ratio={16 / 9}>
          <iframe
            className="rounded-xl"
            src="https://www.youtube.com/embed/Dorf8i6lCuk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </AspectRatio>
      </Box>

      <Box className="mt-6 bg-[#F8F8F8] p-6 rounded-xl">
        <Text className="font-bold">Lessons</Text>
        
        {topic.transcript}
      </Box>
    </Box>
  )
}

export default LessonTranscript