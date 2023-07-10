import { CarProps } from "@/types";

interface CarDetailsProps {
  car: CarProps;
  isOpen: boolean;
  closeModal: () => void;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return <div>CarDetails</div>;
};

export default CarDetails;
