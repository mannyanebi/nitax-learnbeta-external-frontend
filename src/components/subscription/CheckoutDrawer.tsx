import React from "react"
import { Box, Drawer } from "@mantine/core"

export default function CheckoutDrawer({ 
  opened, 
  close, 
  cart 
}: any){
  return (
    <Drawer 
      opened={opened} 
      size="40rem"
      position='right'
      onClose={close}>
      {/* Drawer content */}

      {cart.name}

      {cart.id}
    </Drawer>
  )
}