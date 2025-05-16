"use client";
import React from "react";
import { CalendarDays, MapPin, User } from "lucide-react";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";
import ImageGallery from "./ImageGallery";
import ClaimRequestModal from "../modals/ClaimRequestModal";
import { useUser } from "@/src/context/user.provider";
import AuthencationModal from "../modals/AuthencationModal";

const FoundItemCard = ({ item }) => {
  const {
    title,
    description,
    images,
    location,
    city,
    dateFound,
    category,
    user,
    questions,
    _id,
  } = item;

  const { user: loggedUser } = useUser();

  return (
    <Card className="max-w-md w-full rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      <ImageGallery images={images} />
      <CardHeader>
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>
      <CardBody className="space-y-2 text-sm">
        <div className="flex items-center gap-2">
          <User className="w-4 h-4" />
          <span className="font-medium">{user?.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>
            {location}, {city}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <CalendarDays className="w-4 h-4" />
          <span>Found: {dateFound.split("T")[0]}</span>
        </div>
        <div className="text-xs text-muted-foreground">
          Category: <span className="font-medium">{category?.name}</span>
        </div>
        <div className="flex gap-3 pt-4">
          {user?.email !== loggedUser?.email ? (
            <>
              {loggedUser?.email && (
                <ClaimRequestModal id={_id} questions={questions} />
              )}
              {!loggedUser?.email && <AuthencationModal />}
            </>
          ) : null}
          <Button variant="solid" className="flex-1">
            Share
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default FoundItemCard;
