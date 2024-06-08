import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "./useBooking";
import Spinner from "../../ui/Spinner";
import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiTrash,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useCheckout } from "../check-in-out/useCheckout";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteBooking } from "./useDeleteBooking";
import Empty from "../../ui/Empty";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const moveBack = useMoveBack();
  const navigate = useNavigate();

  const { booking, isLoading } = useBooking();
  const { checkout, isCheckingOut } = useCheckout();
  const { isDeleting, deleteBooking } = useDeleteBooking();

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  if (isLoading) return <Spinner />;

  if(!booking) return <Empty resourceName='booking'/>

  const { status, id: bookingId } = booking;

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status === "unconfirmed" && (
          <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
            <HiArrowDownOnSquare /> Check in
          </Button>
        )}
        {status === "checked-in" && (
          <Button
            onClick={() => {
              checkout(bookingId);
            }}
          >
            <HiArrowUpOnSquare /> Check out
          </Button>
        )}

        <Modal>
          <Modal.Open opens="delete">
            <Button
              variation="danger"
              icon={<HiTrash />}
              onClick={() => {
                checkout(bookingId);
              }}
            >
              Delete Booking
            </Button>
          </Modal.Open>
          <Modal.Window name="delete">
            <ConfirmDelete
              onConfirm={() => {
                // onSettled is no matter its error or success
                deleteBooking(bookingId, {
                  onSettled: () => {
                    navigate("/bookings");
                  },
                });
              }}
              resourceName="booking"
            />
          </Modal.Window>
        </Modal>

        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
