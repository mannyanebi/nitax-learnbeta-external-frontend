import React from "react";
import { Box, Text, AspectRatio } from "@mantine/core";
import { applyListDiscStyle } from "@/helpers/functions/applyListDiscStyle";

interface Props { topic: any }

const LessonTranscript: React.FC<Props> = ({ topic }) => {
  return (
    <Box>
      <Text className="font-semibold text-lg">
        {topic?.title}
      </Text>

      <Box className="mt-4">
        <AspectRatio ratio={16 / 9}>
          <iframe
            className="rounded-xl"
            src={topic?.video_url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </AspectRatio>
      </Box>

      <Box className="mt-6 bg-[#F8F8F8] p-6 rounded-xl">
        <Text className="font-bold">Lessons</Text>
        
        <Box dangerouslySetInnerHTML={{ 
            __html: applyListDiscStyle(topic?.content) 
          }} 
        />
      </Box>
    </Box>
  )
}

export default LessonTranscript